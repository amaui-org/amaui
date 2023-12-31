import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextFieldsAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFieldsAltW100'

      short_name='TextFieldsAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-40h800v40H80Zm680-120v-508h28v508h-28Zm-562 0 212-508h20l212 508h-34l-60-145H289l-61 145h-30Zm102-172h237L419-736 300-452Z"/>
    </Icon>
  );
});

IconMaterialTextFieldsAltW100.displayName = 'AmauiIconMaterialTextFieldsAltW100';

export default IconMaterialTextFieldsAltW100;
