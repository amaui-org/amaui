import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSymptomsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SymptomsFilled'

      short_name='Symptoms'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M760 976q-67 0-113.5-47T599 815q0-33 14-63t38-53l109-103 108 103q24 23 37.5 52.5T920 814q0 68-47 115t-113 47ZM480 664q-45 0-76.5-31.5T372 556q0-45 31.5-76.5T480 448q45 0 76.5 31.5T588 556q0 45-31.5 76.5T480 664Zm0 192q-146 0-266-81.5T40 556q54-137 174-218.5T480 256q146 0 266 81.5T920 556q-6 15-12.5 29T893 612L762 487l-104 96q1-7 1.5-13.5t.5-13.5q0-75-52.5-127.5T480 376q-75 0-127.5 52.5T300 556q0 75 52.5 127.5T480 736q15 0 29-2t28-7q-12 30-16 62.5t2 65.5q-11 1-21.5 1H480Z"/>
    </Icon>
  );
});

IconMaterialSymptomsFilled.displayName = 'AmauiIconMaterialSymptomsFilled';

export default IconMaterialSymptomsFilled;
