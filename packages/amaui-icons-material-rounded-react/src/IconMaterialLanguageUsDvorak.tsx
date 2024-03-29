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
      <path d="M240 696h130V456H240v240Zm-40 80q-17 0-28.5-11.5T160 736V416q0-17 11.5-28.5T200 376h170q33 0 56.5 23.5T450 456v240q0 33-23.5 56.5T370 776H200Zm452 0q-12 0-22-7.5T616 750L507 426q-6-18 5-34t31-16q12 0 22 7.5t14 18.5l86 252 86-252q4-11 14-18.5t22-7.5q20 0 31 15.5t5 34.5L714 750q-4 11-14 18.5t-22 7.5h-26Z"/>
    </Icon>
  );
});

IconMaterialLanguageUsDvorak.displayName = 'AmauiIconMaterialLanguageUsDvorak';

export default IconMaterialLanguageUsDvorak;
