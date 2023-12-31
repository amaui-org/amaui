import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDigitalWellbeing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DigitalWellbeing'

      short_name='DigitalWellbeing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-600q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T540-740q0-25-17.5-42.5T480-800q-25 0-42.5 17.5T420-740q0 25 17.5 42.5T480-680Zm-57 543L240-320q-20-20-30-45t-10-55q0-59 40.5-99.5T340-560q29 0 53.5 11t44.5 31l42 42 42-42q20-20 44.5-31t53.5-11q59 0 99.5 40.5T760-420q0 30-10 55t-30 45L537-137q-12 12-27 18t-30 6q-15 0-30-6t-27-18Zm57-57 182-182q9-9 13.5-20.5T680-420q0-24-17-42t-43-18q-12 0-21.5 3.5T580-464L480-364 380-464q-6-6-15.5-11t-24.5-5q-26 0-43 18t-17 42q0 12 5 22.5t13 19.5l182 184Zm0-546Zm0 403Z"/>
    </Icon>
  );
});

IconMaterialDigitalWellbeing.displayName = 'AmauiIconMaterialDigitalWellbeing';

export default IconMaterialDigitalWellbeing;
