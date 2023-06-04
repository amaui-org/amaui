import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGppBadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GppBadW100Filled'

      short_name='GppBad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 12.4 1.85 1.85q.125.125.25.125t.25-.125q.125-.125.113-.262-.013-.138-.113-.238L12.5 11.9l1.85-1.85q.125-.125.125-.25t-.125-.25q-.125-.125-.262-.112-.138.012-.238.112L12 11.4l-1.85-1.85q-.125-.125-.25-.125t-.25.125q-.125.125-.112.262.012.138.112.238l1.85 1.85-1.85 1.85q-.125.125-.125.25t.125.25q.125.125.263.113.137-.013.237-.113Zm0 8.175h-.212q-.088 0-.163-.05-2.725-1-4.525-3.587Q5.3 14.35 5.3 11.1V6.95q0-.475.275-.863.275-.387.7-.562l5.2-1.925q.275-.1.525-.1t.525.1l5.2 1.925q.425.175.7.562.275.388.275.863v4.15q0 3.25-1.8 5.838-1.8 2.587-4.525 3.587-.1.05-.375.05Z"/>
    </Icon>
  );
});

IconMaterialGppBadW100Filled.displayName = 'AmauiIconMaterialGppBadW100Filled';

export default IconMaterialGppBadW100Filled;
