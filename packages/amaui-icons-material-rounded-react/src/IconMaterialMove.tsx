import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Move'

      short_name='Move'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 776q-7 0-12-4t-7-10q-14-42-34-70t-40-54q-20-26-33.5-54T300 516q0-58 41-99t99-41q58 0 99 41t41 99q0 40-13.5 68T533 638q-20 26-40 54t-34 70q-2 6-7 10t-12 4Zm0-112q9-14 18-26t17-23q23-30 34-50t11-49q0-33-23.5-56.5T440 436q-33 0-56.5 23.5T360 516q0 29 11 49t34 50q8 11 17 23t18 26Zm0-98q21 0 35.5-14.5T490 516q0-21-14.5-35.5T440 466q-21 0-35.5 14.5T390 516q0 21 14.5 35.5T440 566Zm0-50Zm0 420q-150 0-255-105T80 576q0-75 28.5-140.5t77-114q48.5-48.5 114-77T440 216q75 0 140.5 28.5t114 77q48.5 48.5 77 114T800 576v8l25-25q11-12 27.5-12t28.5 11q12 12 12 28.5T881 615l-93 93q-12 12-28 12t-28-12l-94-94q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l25 25v-7q0-116-82-198t-198-82q-116 0-198 82t-82 198q1 116 82.5 198T440 856q47 0 88.5-14t76.5-40q14-10 30.5-10t27.5 11q12 12 12 29t-14 28q-46 36-102 56t-119 20Z"/>
    </Icon>
  );
});

IconMaterialMove.displayName = 'AmauiIconMaterialMove';

export default IconMaterialMove;
