import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInstantMixW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstantMixW100'

      short_name='InstantMix'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M218-186v-286h-80v-28h188v28h-80v286h-28Zm0-434v-154h28v154h-28Zm168 0v-28h80v-126h28v126h80v28H386Zm80 434v-314h28v314h-28Zm248 0v-126h-80v-28h188v28h-80v126h-28Zm0-274v-314h28v314h-28Z"/>
    </Icon>
  );
});

IconMaterialInstantMixW100.displayName = 'AmauiIconMaterialInstantMixW100';

export default IconMaterialInstantMixW100;
