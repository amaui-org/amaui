import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLteMobiledataBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LteMobiledataBadgeW100'

      short_name='LteMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M220 710h148v-28H248V442h-28v268Zm218 0h28V470h80v-28H358v28h80v240Zm188 0h148v-28H654v-92h80v-28h-80v-92h120v-28H626v268ZM92 884V268h776v616H92Zm28-28h720V296H120v560Zm0 0V296v560Z"/>
    </Icon>
  );
});

IconMaterialLteMobiledataBadgeW100.displayName = 'AmauiIconMaterialLteMobiledataBadgeW100';

export default IconMaterialLteMobiledataBadgeW100;
