import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTauntFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TauntFilled'

      short_name='Taunt'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M218 675q-24 13-51 5.5T126 650q-17-29-6-60t43-42l337-112 36 71-318 168Zm22 261V709l349-184-17-35 228-114 36 72-276 208v280H240Zm60-440q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Z"/>
    </Icon>
  );
});

IconMaterialTauntFilled.displayName = 'AmauiIconMaterialTauntFilled';

export default IconMaterialTauntFilled;
