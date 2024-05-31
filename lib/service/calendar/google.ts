import { google } from "googleapis";

export class GoogleCalendar {
  public authUrl: string;
  private authClient: any;
  /**
   *
   */
  async init() {
    this.authClient = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT
    );

    const scopes = ["https://www.googleapis.com/auth/calendar"];
    this.authUrl = this.authClient.generateAuthUrl({
      access_type: "online",
      scope: scopes,
    });
  }

  async setAuthToken(code: string): Promise<void> {
    const { tokens } = await this.authClient.getToken(code);
    this.authClient.setCredentials(tokens);
  }
}
