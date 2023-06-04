import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConditionsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConditionsW100'

      short_name='Conditions'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M400 326q-26.4 0-45.2-18.8Q336 288.4 336 262q0-26.4 18.8-45.2Q373.6 198 400 198q26.4 0 45.2 18.8Q464 235.6 464 262q0 26.4-18.8 45.2Q426.4 326 400 326Zm260 506q48 0 82-34t34-82q0-48-34-82t-82-34q-48 0-82 34t-34 82q0 48 34 82t82 34Zm204 107L752 827q-20 16-43.351 24.5Q685.297 860 660 860q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 25.297-8.5 48.649Q787 788 771 808l112 112-19 19Zm-414 11V840q6 11 13 20.5t15 18.5v71h-28Zm-128 0V426q-58-5-115.5-12.5T92 392l6-28q75 18 149.892 26t152 8Q477 398 552 390t150-26l6 28q-57 14-114.5 21.5T478 426v127q-26 29-42 66t-19 79h-67v252h-28Z"/>
    </Icon>
  );
});

IconMaterialConditionsW100.displayName = 'AmauiIconMaterialConditionsW100';

export default IconMaterialConditionsW100;
