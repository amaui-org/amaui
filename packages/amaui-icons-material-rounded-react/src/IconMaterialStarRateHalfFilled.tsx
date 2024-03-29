import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStarRateHalfFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarRateHalfFilled'

      short_name='StarRateHalf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 8.9v5.9l2.4 1.85-.9-3.05 2.25-1.6h-2.8Zm0 8.4-3.7 2.825q-.275.225-.6.212-.325-.012-.575-.187-.25-.175-.387-.475-.138-.3-.013-.65L8.15 14.4l-3.625-2.575q-.3-.2-.375-.525-.075-.325.025-.6.1-.275.35-.488.25-.212.6-.212H9.6l1.45-4.8q.125-.35.388-.538.262-.187.562-.187.3 0 .562.187.263.188.388.538L14.4 10h4.475q.35 0 .6.212.25.213.35.488.1.275.025.6-.075.325-.375.525L15.85 14.4l1.425 4.625q.125.35-.012.65-.138.3-.388.475t-.575.187q-.325.013-.6-.212Z"/>
    </Icon>
  );
});

IconMaterialStarRateHalfFilled.displayName = 'AmauiIconMaterialStarRateHalfFilled';

export default IconMaterialStarRateHalfFilled;
