"use cache"

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"

const PrivacyPage = async () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Политика конфиденциальности</h1>
        <p className="text-muted-foreground">Как мы обрабатываем и защищаем ваши данные</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Сбор информации</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Мы собираем только необходимую информацию для предоставления наших услуг:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Основная информация профиля (имя пользователя, аватар)</li>
            <li>Данные для авторизации через внешние сервисы</li>
            <li>Сообщения и медиафайлы, которые вы отправляете</li>
            <li>Техническая информация для улучшения сервиса</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Использование данных</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Ваши данные используются исключительно для:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Предоставления основного функционала платформы</li>
            <li>Обеспечения безопасности и предотвращения злоупотреблений</li>
            <li>Улучшения качества сервиса</li>
            <li>Связи с вами по важным вопросам</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Защита данных</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Мы применяем современные методы шифрования и защиты данных. Ваша информация
            хранится на защищенных серверах и не передается третьим лицам без вашего согласия.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default PrivacyPage
