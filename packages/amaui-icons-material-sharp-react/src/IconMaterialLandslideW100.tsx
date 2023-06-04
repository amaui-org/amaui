import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLandslideW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandslideW100'

      short_name='Landslide'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 20.7h16.1l-4.35-5.725-4.95-2.15L7.35 9.3H3.3ZM4 20v-2.275l2 .65 8.575-2.85L18 20Zm2-2.375-2-.65v-3l2 .65L9.675 13.4l3.925 1.7ZM17.7 13l3-1.35v-2.1l-2.875-.65-1.525 1.225v1.75ZM6 13.875l-2-.65V10h3l2.2 2.825Zm11.8-1.7-.8-.625v-1.1l1-.8 2 .45v1.1ZM12.15 7.55l3.55-1.425v-3.05l-3.425-.7L10.3 3.7v2.6Zm.075-.8L11 5.925v-1.85l1.425-.95L15 3.65v2Z"/>
    </Icon>
  );
});

IconMaterialLandslideW100.displayName = 'AmauiIconMaterialLandslideW100';

export default IconMaterialLandslideW100;
