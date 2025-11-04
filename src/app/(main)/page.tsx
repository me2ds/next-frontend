"use cache"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { UserPlus, MessageCircle, Music, Users } from "lucide-react"
import Image from "next/image"
import { AuthGuard } from "@/features/auth/ui/guard"

const MainPage = async () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 px-4">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Image
            src="/logo-black.png"
            alt="Desme"
            width={120}
            height={40}
            className="dark:hidden"
          />
          <Image
            src="/logo-white.png"
            alt="Desme"
            width={120}
            height={40}
            className="hidden dark:block"
          />
        </div>
        <h1 className="text-4xl font-bold">Добро пожаловать в Desme</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Общайтесь с друзьями, слушайте музыку вместе и создавайте незабываемые
          моменты
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-4xl w-full">
        <Card className="text-center">
          <CardHeader>
            <MessageCircle className="w-12 h-12 mx-auto mb-2 text-primary" />
            <CardTitle>Чаты и сообщения</CardTitle>
            <CardDescription>
              Общайтесь в текстовых и голосовых каналах с друзьями
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Music className="w-12 h-12 mx-auto mb-2 text-primary" />
            <CardTitle>Музыка вместе</CardTitle>
            <CardDescription>
              Слушайте любимые треки синхронно с друзьями
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Users className="w-12 h-12 mx-auto mb-2 text-primary" />
            <CardTitle>Сообщества</CardTitle>
            <CardDescription>
              Создавайте серверы и присоединяйтесь к интересным группам
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <AuthGuard>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserPlus className="w-5 h-5" />
              Добавить друга
            </CardTitle>
            <CardDescription>
              Введите код друга или никнейм для отправки заявки
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Код друга или никнейм"
            />
            <Button
              className="w-full"
            >
              Отправить заявку
            </Button>
          </CardContent>
        </Card>
      </AuthGuard>
    </div>
  )
}

export default MainPage
