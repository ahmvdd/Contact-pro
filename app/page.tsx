  "use client"

  import { useEffect, useState } from "react"
  import { useRouter } from "next/navigation"
  import { Button } from "@/components/ui/button"
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
  import { Users, Shield, Smartphone, ArrowRight, Star, CheckCircle } from "lucide-react"

  export default function HomePage() {
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
      const token = localStorage.getItem("token")
      if (token) {
        router.push("/dashboard")
      } else {
        setIsLoading(false)
      }
    }, [router])

    if (isLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement...</p>
          </div>
        </div>
      )
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 rounded-lg p-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">ContactPro</h1>
              </div>
              <Button onClick={() => router.push("/auth")} className="bg-blue-600 hover:bg-blue-700">
                Commencer
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Gestionnaire de contacts moderne
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Gérez vos contacts
                <span className="text-blue-600 block">en toute simplicité</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Une application moderne et sécurisée pour organiser, rechercher et gérer tous vos contacts personnels et
                professionnels.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => router.push("/auth")}
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              >
                Commencer gratuitement
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => router.push("/auth")}
                className="text-lg px-8 py-3 border-gray-300"
              >
                Goooooo
              </Button>
            </div>

            {/* Demo credentials */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-sm text-amber-800 font-medium mb-2">🎯</p>
              <p className="text-sm text-amber-700">
                <p>c'est gratuit et securise !!</p>
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tout ce dont vous avez besoin</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Des fonctionnalités puissantes dans une interface simple et intuitive
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4">
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Gestion complète</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    Ajoutez, modifiez et organisez vos contacts avec toutes les informations importantes : nom, téléphone,
                    email, adresse et notes.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4">
                    <Shield className="w-10 h-10 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Sécurité avancée</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    Vos données sont protégées avec un chiffrement moderne et une authentification sécurisée par JWT.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="bg-purple-100 rounded-full p-3 w-16 h-16 mx-auto mb-4">
                    <Smartphone className="w-10 h-10 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Design responsive</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    Interface moderne et responsive qui s'adapte parfaitement à tous vos appareils, mobile et desktop.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi choisir ContactPro ?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Interface intuitive</h3>
                    <p className="text-gray-600">Design moderne et facile à utiliser, même pour les débutants.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Recherche rapide</h3>
                    <p className="text-gray-600">Trouvez instantanément le contact que vous cherchez.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sauvegarde automatique</h3>
                    <p className="text-gray-600">Vos données sont automatiquement sauvegardées et synchronisées.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Multi-plateforme</h3>
                    <p className="text-gray-600">Accédez à vos contacts depuis n'importe quel appareil.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Import/Export</h3>
                    <p className="text-gray-600">Importez vos contacts existants ou exportez vos données.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Support 24/7</h3>
                    <p className="text-gray-600">Une équipe dédiée pour vous accompagner à tout moment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prêt à organiser vos contacts ?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers d'utilisateurs qui font confiance à ContactPro pour gérer leurs relations.
            </p>
            <Button
              size="lg"
              onClick={() => router.push("/auth")}
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              Commencer maintenant
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="bg-blue-600 rounded-lg p-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">ContactPro</span>
              </div>
              <div className="text-gray-400 text-sm">© 2024 ContactPro. Tous droits réservés.</div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
