import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCoffeeMakerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeMakerW100'

      short_name='CoffeeMaker'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 20.7V3.3h14.7V4h-3.3v1.6h-7.4V4h-3.3v16h5.3q-.875-.5-1.437-1.3-.563-.8-.563-2V13h7.4v3.7q0 1.2-.562 2-.563.8-1.438 1.3h5.3v.7Zm7.7-1q1.25 0 2.125-.875t.875-2.125v-3h-6v3q0 1.25.875 2.125t2.125.875Zm0-9.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm0 3.7Z"/>
    </Icon>
  );
});

IconMaterialCoffeeMakerW100.displayName = 'AmauiIconMaterialCoffeeMakerW100';

export default IconMaterialCoffeeMakerW100;
