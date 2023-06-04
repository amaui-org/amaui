import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpecialCharacterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpecialCharacterFilled'

      short_name='SpecialCharacter'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 936V816h200q-84-45-132-125t-48-175q0-142 99-241t241-99q142 0 241 99t99 241q0 95-48 175T640 816h200v120H520V732q78-14 129-75t51-141q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 80 51 141t129 75v204H120Z"/>
    </Icon>
  );
});

IconMaterialSpecialCharacterFilled.displayName = 'AmauiIconMaterialSpecialCharacterFilled';

export default IconMaterialSpecialCharacterFilled;
