import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageUsDvorak = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageUsDvorak'

      short_name='LanguageUsDvorak'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 696h130V456H240v240Zm-80 80V376h250l40 40v320l-40 40H160Zm465 0L490 376h80l95 278 95-278h80L705 776h-80Z"/>
    </Icon>
  );
});

IconMaterialLanguageUsDvorak.displayName = 'AmauiIconMaterialLanguageUsDvorak';

export default IconMaterialLanguageUsDvorak;
