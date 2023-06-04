import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial3gMobiledataBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3gMobiledataBadgeW100'

      short_name='3gMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M92 884V268h776v616H92Zm28-28h720V296H120v560Zm0 0V296v560Zm386-106h228V562h-94v28h66v132H534V430h200v-28H506v348Zm-280 0h188V590l-14-14 14-14V402H226v28h160v132H226v28h160v132H226v28Z"/>
    </Icon>
  );
});

IconMaterial3gMobiledataBadgeW100.displayName = 'AmauiIconMaterial3gMobiledataBadgeW100';

export default IconMaterial3gMobiledataBadgeW100;
