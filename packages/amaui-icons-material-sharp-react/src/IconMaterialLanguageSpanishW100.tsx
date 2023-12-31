import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageSpanishW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageSpanishW100'

      short_name='LanguageSpanish'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-306v-68h28v40h172v-132H520v-188h228v68h-28v-40H548v132h200v188H520ZM212-654h228v28H240v132h160v28H240v132h200v28H212v-348Z"/>
    </Icon>
  );
});

IconMaterialLanguageSpanishW100.displayName = 'AmauiIconMaterialLanguageSpanishW100';

export default IconMaterialLanguageSpanishW100;
