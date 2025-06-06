import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { verifyToken } from "@/lib/auth"

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authHeader = request.headers.get("authorization")
    const token = authHeader?.replace("Bearer ", "")

    if (!token) {
      return NextResponse.json({ error: "Token manquant" }, { status: 401 })
    }

    const decoded = verifyToken(token)
    if (!decoded) {
      return NextResponse.json({ error: "Token invalide" }, { status: 401 })
    }

    const contactId = Number.parseInt(params.id)
    if (isNaN(contactId)) {
      return NextResponse.json({ error: "ID de contact invalide" }, { status: 400 })
    }

    const { firstName, lastName, phone, email, address, notes } = await request.json()

    if (!firstName?.trim() || !lastName?.trim()) {
      return NextResponse.json({ error: "Prénom et nom requis" }, { status: 400 })
    }

    // Vérifier que le contact appartient à l'utilisateur
    const existingContact = await prisma.contact.findFirst({
      where: {
        id: contactId,
        userId: decoded.userId,
      },
    })

    if (!existingContact) {
      return NextResponse.json({ error: "Contact non trouvé" }, { status: 404 })
    }

    const contact = await prisma.contact.update({
      where: { id: contactId },
      data: {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        phone: phone?.trim() || null,
        email: email?.trim() || null,
        address: address?.trim() || null,
        notes: notes?.trim() || null,
      },
    })

    return NextResponse.json(contact)
  } catch (error) {
    console.error("Erreur lors de la modification du contact:", error)
    return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const authHeader = request.headers.get("authorization")
    const token = authHeader?.replace("Bearer ", "")

    if (!token) {
      return NextResponse.json({ error: "Token manquant" }, { status: 401 })
    }

    const decoded = verifyToken(token)
    if (!decoded) {
      return NextResponse.json({ error: "Token invalide" }, { status: 401 })
    }

    const contactId = Number.parseInt(params.id)
    if (isNaN(contactId)) {
      return NextResponse.json({ error: "ID de contact invalide" }, { status: 400 })
    }

    // Vérifier que le contact appartient à l'utilisateur
    const existingContact = await prisma.contact.findFirst({
      where: {
        id: contactId,
        userId: decoded.userId,
      },
    })

    if (!existingContact) {
      return NextResponse.json({ error: "Contact non trouvé" }, { status: 404 })
    }

    await prisma.contact.delete({
      where: { id: contactId },
    })

    return NextResponse.json({ message: "Contact supprimé avec succès" })
  } catch (error) {
    console.error("Erreur lors de la suppression du contact:", error)
    return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 })
  }
}
