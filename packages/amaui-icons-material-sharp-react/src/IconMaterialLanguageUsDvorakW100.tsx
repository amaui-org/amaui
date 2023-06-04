import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageUsDvorakW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageUsDvorakW100'

      short_name='LanguageUsDvorak'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 722h137l35-35V465l-35-35H240v292Zm-28 28V402h177l51 51v246l-51 51H212Zm421 0L514 402h28l109 314 109-314h28L669 750h-36Z"/>
    </Icon>
  );
});

IconMaterialLanguageUsDvorakW100.displayName = 'AmauiIconMaterialLanguageUsDvorakW100';

export default IconMaterialLanguageUsDvorakW100;
