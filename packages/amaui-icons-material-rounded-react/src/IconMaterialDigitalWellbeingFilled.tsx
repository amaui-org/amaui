import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDigitalWellbeingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DigitalWellbeingFilled'

      short_name='DigitalWellbeing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-600q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm-57 463L240-320q-20-20-30-45t-10-55q0-59 40.5-99.5T340-560q29 0 53.5 11t44.5 31l42 42 42-42q20-20 44.5-31t53.5-11q59 0 99.5 40.5T760-420q0 30-10 55t-30 45L537-137q-12 12-27 18t-30 6q-15 0-30-6t-27-18Z"/>
    </Icon>
  );
});

IconMaterialDigitalWellbeingFilled.displayName = 'AmauiIconMaterialDigitalWellbeingFilled';

export default IconMaterialDigitalWellbeingFilled;
