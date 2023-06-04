import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageUsDvorakW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageUsDvorakW100Filled'

      short_name='LanguageUsDvorak'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 722h140q14 0 23-9t9-23V462q0-14-9-23t-23-9H240v292Zm2 28q-13 0-21.5-8.5T212 720V432q0-13 8.5-21.5T242 402h138q25 0 42.5 17.5T440 462v228q0 25-17.5 42.5T380 750H242Zm403 0q-5 0-9.5-3.5T629 738L520 420q-2-7 1.5-12.5T532 402q5 0 8 2.5t5 6.5l106 305 106-305q2-4 5-6.5t8-2.5q7 0 10.5 5.5T782 420L673 739q-2 5-6.5 8t-9.5 3h-12Z"/>
    </Icon>
  );
});

IconMaterialLanguageUsDvorakW100Filled.displayName = 'AmauiIconMaterialLanguageUsDvorakW100Filled';

export default IconMaterialLanguageUsDvorakW100Filled;
