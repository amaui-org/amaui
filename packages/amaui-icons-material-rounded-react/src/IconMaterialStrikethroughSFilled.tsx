import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStrikethroughSFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrikethroughSFilled'

      short_name='StrikethroughS'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.15 20q-1.625 0-2.925-.812-1.3-.813-2.1-2.288-.225-.425-.05-.9.175-.475.675-.675.425-.2.863-.025.437.175.712.625.45.75 1.187 1.213.738.462 1.688.462 1.05 0 1.9-.5.85-.5.85-1.6 0-.45-.175-.825Q14.6 14.3 14.3 14h2.8q.125.35.188.712.062.363.062.788 0 2.15-1.538 3.325Q14.275 20 12.15 20ZM3 12q-.425 0-.712-.288Q2 11.425 2 11t.288-.713Q2.575 10 3 10h18q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 12 21 12Zm4.25-4q.05-1.725 1.363-2.938Q9.925 3.85 12.05 3.85q1.35 0 2.425.537 1.075.538 1.8 1.663.275.425.1.9-.175.475-.675.7-.375.175-.812.038-.438-.138-.788-.563-.325-.375-.825-.625-.5-.25-1.175-.25-1.025 0-1.7.463-.675.462-.75 1.287Z"/>
    </Icon>
  );
});

IconMaterialStrikethroughSFilled.displayName = 'AmauiIconMaterialStrikethroughSFilled';

export default IconMaterialStrikethroughSFilled;
