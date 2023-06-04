import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSnowmobileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnowmobileW100'

      short_name='Snowmobile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.7 19.35H1.95q-.65 0-1-.425T.6 18q0-.35.188-.663.187-.312.537-.512l4.95-2.7-5.4-1.525 1.45-2.9 8.8 1L15 7.8l-1.55-1.45H11.1v-.7h2.625l7.225 6.725q.2.175.275.4.075.225.075.475 0 .825-.675 1.462-.675.638-2.1.638h-1.55l3.55 3.3h.425q.5 0 1-.325t.725-.925h.725q-.225.875-.938 1.412-.712.538-1.512.538H15.6v-.7h3.9l-3.55-3.3H11.1q0 1.85-1.225 2.925Q8.65 19.35 6.7 19.35Zm-4.75-.7H6.7q1.65 0 2.675-.875T10.4 15.3l-3.175-.9-5.35 2.9q-.225.125-.4.275-.175.15-.175.425t.188.462q.187.188.462.188Zm8.7-4h7.875q.975 0 1.525-.363.55-.362.55-1.287l-5.075-4.7-4.2 3.125-8.6-.975-.85 1.7Zm.6-3.175Z"/>
    </Icon>
  );
});

IconMaterialSnowmobileW100.displayName = 'AmauiIconMaterialSnowmobileW100';

export default IconMaterialSnowmobileW100;
