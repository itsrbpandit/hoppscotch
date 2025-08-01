import { ref } from 'vue';
import { InfraConfigEnum } from './backend/graphql';

// Check if any input validation has failed
export const hasInputValidationFailed = ref(false);

export type SsoAuthProviders = 'google' | 'microsoft' | 'github';

export type ServerConfigs = {
  providers: {
    google: {
      name: SsoAuthProviders;
      enabled: boolean;
      fields: {
        client_id: string;
        client_secret: string;
        callback_url: string;
        scope: string;
      };
    };
    github: {
      name: SsoAuthProviders;
      enabled: boolean;
      fields: {
        client_id: string;
        client_secret: string;
        callback_url: string;
        scope: string;
      };
    };
    microsoft: {
      name: SsoAuthProviders;
      enabled: boolean;
      fields: {
        client_id: string;
        client_secret: string;
        callback_url: string;
        scope: string;
        tenant: string;
      };
    };
  };

  mailConfigs: {
    name: string;
    enabled: boolean;
    fields: {
      email_auth: boolean;
      mailer_smtp_url: string;
      mailer_from_address: string;
      mailer_smtp_host: string;
      mailer_smtp_port: string;
      mailer_smtp_user: string;
      mailer_smtp_password: string;
      mailer_smtp_secure: boolean;
      mailer_tls_reject_unauthorized: boolean;
      mailer_use_custom_configs: boolean;
    };
  };

  tokenConfigs: {
    name: string;
    fields: {
      jwt_secret: string;
      token_salt_complexity: string;
      magic_link_token_validity: string;
      refresh_token_validity: string;
      access_token_validity: string;
      session_secret: string;
    };
  };

  historyConfig: {
    name: string;
    enabled: boolean;
  };

  dataSharingConfigs: {
    name: string;
    enabled: boolean;
  };

  rateLimitConfigs: {
    name: string;
    fields: {
      rate_limit_ttl: string;
      rate_limit_max: string;
    };
  };
};

export type UpdatedConfigs = {
  name: InfraConfigEnum;
  value: string;
};

export type ConfigTransform = {
  config: Config[];
  enabled?: boolean;
  fields?: Record<string, string | boolean> | string;
};

export type ConfigSection = {
  name: SsoAuthProviders | string;
  enabled?: boolean;
  fields: Record<string, string | boolean>;
};

export type Config = {
  name: InfraConfigEnum;
  key: string;
};

export const GOOGLE_CONFIGS: Config[] = [
  {
    name: InfraConfigEnum.GoogleClientId,
    key: 'client_id',
  },
  {
    name: InfraConfigEnum.GoogleClientSecret,
    key: 'client_secret',
  },
  {
    name: InfraConfigEnum.GoogleCallbackUrl,
    key: 'callback_url',
  },
  {
    name: InfraConfigEnum.GoogleScope,
    key: 'scope',
  },
];

export const MICROSOFT_CONFIGS: Config[] = [
  {
    name: InfraConfigEnum.MicrosoftClientId,
    key: 'client_id',
  },
  {
    name: InfraConfigEnum.MicrosoftClientSecret,
    key: 'client_secret',
  },
  {
    name: InfraConfigEnum.MicrosoftCallbackUrl,
    key: 'callback_url',
  },
  {
    name: InfraConfigEnum.MicrosoftScope,
    key: 'scope',
  },
  {
    name: InfraConfigEnum.MicrosoftTenant,
    key: 'tenant',
  },
];

export const GITHUB_CONFIGS: Config[] = [
  {
    name: InfraConfigEnum.GithubClientId,
    key: 'client_id',
  },
  {
    name: InfraConfigEnum.GithubClientSecret,
    key: 'client_secret',
  },
  {
    name: InfraConfigEnum.GithubCallbackUrl,
    key: 'callback_url',
  },
  {
    name: InfraConfigEnum.GithubScope,
    key: 'scope',
  },
];

export const MAIL_CONFIGS: Config[] = [
  {
    name: InfraConfigEnum.MailerSmtpUrl,
    key: 'mailer_smtp_url',
  },
  {
    name: InfraConfigEnum.MailerAddressFrom,
    key: 'mailer_from_address',
  },
  {
    name: InfraConfigEnum.MailerSmtpEnable,
    key: 'mailer_smtp_enabled',
  },
  {
    name: InfraConfigEnum.MailerUseCustomConfigs,
    key: 'mailer_use_custom_configs',
  },
];

export const CUSTOM_MAIL_CONFIGS: Config[] = [
  {
    name: InfraConfigEnum.MailerSmtpHost,
    key: 'mailer_smtp_host',
  },
  {
    name: InfraConfigEnum.MailerSmtpPort,
    key: 'mailer_smtp_port',
  },
  {
    name: InfraConfigEnum.MailerSmtpUser,
    key: 'mailer_smtp_user',
  },
  {
    name: InfraConfigEnum.MailerSmtpPassword,
    key: 'mailer_smtp_password',
  },
  {
    name: InfraConfigEnum.MailerSmtpSecure,
    key: 'mailer_smtp_secure',
  },
  {
    name: InfraConfigEnum.MailerTlsRejectUnauthorized,
    key: 'mailer_tls_reject_unauthorized',
  },
];

const DATA_SHARING_CONFIGS: Omit<Config, 'key'>[] = [
  {
    name: InfraConfigEnum.AllowAnalyticsCollection,
  },
];

export const HISTORY_STORE_CONFIG: Config[] = [
  {
    name: InfraConfigEnum.UserHistoryStoreEnabled,
    key: 'history_store_enabled',
  },
];

export const RATE_LIMIT_CONFIGS: Config[] = [
  {
    name: InfraConfigEnum.RateLimitTtl,
    key: 'rate_limit_ttl',
  },
  {
    name: InfraConfigEnum.RateLimitMax,
    key: 'rate_limit_max',
  },
];

export const TOKEN_VALIDATION_CONFIGS: Config[] = [
  {
    name: InfraConfigEnum.JwtSecret,
    key: 'jwt_secret',
  },
  {
    name: InfraConfigEnum.SessionSecret,
    key: 'session_secret',
  },
  {
    name: InfraConfigEnum.TokenSaltComplexity,
    key: 'token_salt_complexity',
  },
  {
    name: InfraConfigEnum.MagicLinkTokenValidity,
    key: 'magic_link_token_validity',
  },
  {
    name: InfraConfigEnum.RefreshTokenValidity,
    key: 'refresh_token_validity',
  },
  {
    name: InfraConfigEnum.AccessTokenValidity,
    key: 'access_token_validity',
  },
];

export const ALL_CONFIGS = [
  GOOGLE_CONFIGS,
  MICROSOFT_CONFIGS,
  GITHUB_CONFIGS,
  MAIL_CONFIGS,
  CUSTOM_MAIL_CONFIGS,
  DATA_SHARING_CONFIGS,
  HISTORY_STORE_CONFIG,
  RATE_LIMIT_CONFIGS,
  TOKEN_VALIDATION_CONFIGS,
];
