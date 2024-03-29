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
      <path d="M480 296q-92 0-156 64t-64 156q0 63 33 116t90 81q24 12 40.5 32.5T440 792v84q0 25-17.5 42.5T380 936H180q-25 0-42.5-17.5T120 876q0-25 17.5-42.5T180 816h140q-84-45-132-125t-48-175q0-142 99-241t241-99q142 0 241 99t99 241q0 95-48 175T640 816h140q25 0 42.5 17.5T840 876q0 25-17.5 42.5T780 936H580q-25 0-42.5-17.5T520 876v-84q0-26 16.5-46.5T577 713q57-28 90-81t33-116q0-92-64-156t-156-64Z"/>
    </Icon>
  );
});

IconMaterialSpecialCharacterFilled.displayName = 'AmauiIconMaterialSpecialCharacterFilled';

export default IconMaterialSpecialCharacterFilled;
