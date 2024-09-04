import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClosedCaptionAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionAddW100'

      short_name='ClosedCaptionAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480Zm126 268H172v-536h616v354h-28v-326H200v480h406v28Zm154 80v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28ZM276-376h168v-52h-28v24H304v-152h112v26h28v-54H276v208Zm240 0h168v-52h-28v24H544v-152h112v26h28v-54H516v208Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionAddW100.displayName = 'AmauiIconMaterialClosedCaptionAddW100';

export default IconMaterialClosedCaptionAddW100;
