import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEntW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EntW100'

      short_name='Ent'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M395 924h28l22-214h129v-28H448l18-172h192v-28H441l-46 442Zm-103 0V780q-57-52-88.5-115.5T172 535.277q0-128.032 89.833-217.655Q351.667 228 480 228q103 0 187.5 63.5T777 455l47 189H708v200H548v80h-28V816h160V616h108l-38-155q-23-92-99-148.5T480 256q-116 0-198 81.291Q200 418.583 200 535q0 59.744 24.5 113.513 24.5 53.769 69.5 95.59L320 768v156h-28Zm202-334Z"/>
    </Icon>
  );
});

IconMaterialEntW100.displayName = 'AmauiIconMaterialEntW100';

export default IconMaterialEntW100;
