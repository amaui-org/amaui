import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial5gMobiledataBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='5gMobiledataBadgeW100'

      short_name='5gMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M92 884V268h776v616H92Zm28-28h720V296H120v560Zm614-294h-94v28h66v132H534V430h200v-28H506v348h228V562ZM226 750h188V562H254V430h160v-28H226v188h160v132H226v28ZM120 856V296v560Z"/>
    </Icon>
  );
});

IconMaterial5gMobiledataBadgeW100.displayName = 'AmauiIconMaterial5gMobiledataBadgeW100';

export default IconMaterial5gMobiledataBadgeW100;
