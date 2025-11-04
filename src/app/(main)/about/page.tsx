"use cache"

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"

const AboutPage = async () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">О нас</h1>
        <p className="text-muted-foreground">Узнайте больше о платформе Desme</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Что такое Desme?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Desme — это современная платформа для общения, которая объединяет лучшие возможности
            мессенджеров и социальных сетей. Мы создали пространство, где вы можете общаться с
            друзьями, слушать музыку вместе и создавать незабываемые моменты.
          </p>
          <p>
            Наша миссия — сделать онлайн-общение более живым и интересным, предоставляя
            пользователям инструменты для качественного взаимодействия в цифровом мире.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Наши возможности</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Чаты и сообщения</h3>
              <p className="text-sm text-muted-foreground">
                Общайтесь в текстовых и голосовых каналах с друзьями и сообществами
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Музыка вместе</h3>
              <p className="text-sm text-muted-foreground">
                Слушайте любимые треки синхронно с друзьями в режиме реального времени
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Сообщества</h3>
              <p className="text-sm text-muted-foreground">
                Создавайте серверы и присоединяйтесь к интересным группам по интересам
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AboutPage
