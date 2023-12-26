import { EntityProvider, EntityProviderConnection } from '@backstage/plugin-catalog-node';
import { Config } from '@backstage/config';

/**
 * Provides entities from fictional frobs service.
 */
declare class SubversionProvider implements EntityProvider {
    private readonly env;
    private readonly config;
    private connection?;
    /** [1] */
    constructor(env: string, config: Config);
    /** [2] */
    getProviderName(): string;
    /** [3] */
    connect(connection: EntityProviderConnection): Promise<void>;
    /** [4] */
    run(): Promise<void>;
}

export { SubversionProvider };
