"use server"

import { AuthGuard } from "@/features/auth/ui/guard"
import { PlaylistsList } from "@/widgets/music/playlist/ui/playlistsList"
import { AccountInfo } from "@/widgets/user/ui/account-info"

const AccountPage = async () => {

  return (
    <AuthGuard>
      <AccountInfo />
      <PlaylistsList />
    </AuthGuard>
  )
}

export default AccountPage
