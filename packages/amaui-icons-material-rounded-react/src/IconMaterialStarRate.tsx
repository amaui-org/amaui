import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStarRate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarRate'

      short_name='StarRate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.6 16.65 12 14.8l2.4 1.85-.9-3.05 2.25-1.6h-2.8L12 8.9l-.95 3.1h-2.8l2.25 1.6Zm2.4.65-3.7 2.825q-.275.225-.6.212-.325-.012-.575-.187-.25-.175-.387-.475-.138-.3-.013-.65L8.15 14.4l-3.625-2.575q-.3-.2-.375-.525-.075-.325.025-.6.1-.275.35-.488.25-.212.6-.212H9.6l1.45-4.8q.125-.35.388-.538.262-.187.562-.187.3 0 .562.187.263.188.388.538L14.4 10h4.475q.35 0 .6.212.25.213.35.488.1.275.025.6-.075.325-.375.525L15.85 14.4l1.425 4.625q.125.35-.012.65-.138.3-.388.475t-.575.187q-.325.013-.6-.212Zm0-4.525Z"/>
    </Icon>
  );
});

IconMaterialStarRate.displayName = 'AmauiIconMaterialStarRate';

export default IconMaterialStarRate;
