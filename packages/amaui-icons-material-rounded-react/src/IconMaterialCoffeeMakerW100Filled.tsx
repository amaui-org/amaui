import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCoffeeMakerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeMakerW100Filled'

      short_name='CoffeeMaker'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.15 20.7q-.65 0-1.075-.425-.425-.425-.425-1.075V4.8q0-.65.425-1.075Q5.5 3.3 6.15 3.3H19q.15 0 .25.1t.1.25q0 .15-.1.25T19 4h-2.95v.9q0 .3-.2.5t-.5.2h-6q-.3 0-.5-.2t-.2-.5V4h-2.5q-.35 0-.575.225-.225.225-.225.575v14.4q0 .35.225.575Q5.8 20 6.15 20h4.5q-.875-.5-1.437-1.3-.563-.8-.563-2v-2.2q0-.625.438-1.062Q9.525 13 10.15 13h4.4q.625 0 1.063.438.437.437.437 1.062v2.2q0 1.2-.562 2-.563.8-1.438 1.3H19q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm6.2-10.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Z"/>
    </Icon>
  );
});

IconMaterialCoffeeMakerW100Filled.displayName = 'AmauiIconMaterialCoffeeMakerW100Filled';

export default IconMaterialCoffeeMakerW100Filled;
