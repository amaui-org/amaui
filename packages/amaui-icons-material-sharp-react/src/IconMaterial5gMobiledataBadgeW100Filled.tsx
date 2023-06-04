import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial5gMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='5gMobiledataBadgeW100Filled'

      short_name='5gMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M92 884V268h776v616H92Zm642-322h-94v28h66v132H534V430h200v-28H506v348h228V562ZM226 750h188V562H254V430h160v-28H226v188h160v132H226v28Z"/>
    </Icon>
  );
});

IconMaterial5gMobiledataBadgeW100Filled.displayName = 'AmauiIconMaterial5gMobiledataBadgeW100Filled';

export default IconMaterial5gMobiledataBadgeW100Filled;
