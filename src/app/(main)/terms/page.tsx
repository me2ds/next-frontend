"use cache"

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"

const TermsPage = async () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Пользовательское соглашение</h1>
        <p className="text-muted-foreground">Условия использования платформы Desme</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Принятие условий</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Используя платформу Desme, вы соглашаетесь с данными условиями использования.
            Если вы не согласны с какими-либо условиями, пожалуйста, не используйте наш сервис.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Правила поведения</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>При использовании Desme вы обязуетесь:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Соблюдать законы и права других пользователей</li>
            <li>Не распространять спам, вредоносный контент или нарушать авторские права</li>
            <li>Не использовать сервис для незаконной деятельности</li>
            <li>Уважительно относиться к другим участникам сообщества</li>
            <li>Не создавать множественные аккаунты для обхода ограничений</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ответственность</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Мы стремимся обеспечить стабильную работу сервиса, но не можем гарантировать
            100% доступность. Пользователи несут ответственность за свой контент и действия
            на платформе.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Изменения условий</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Мы оставляем за собой право изменять данные условия. О существенных изменениях
            мы уведомим пользователей заранее.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default TermsPage
