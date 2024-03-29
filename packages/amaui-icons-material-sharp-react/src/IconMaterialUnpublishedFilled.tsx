import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnpublishedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnpublishedFilled'

      short_name='Unpublished'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.475 23.3-2.95-2.95q-1.2.8-2.587 1.225Q13.55 22 12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-1.55.425-2.938.425-1.387 1.225-2.587L.675 3.5 2.1 2.075l19.8 19.8Zm-.1-5.8-5.325-5.35 2.6-2.6-1.4-1.4-2.6 2.625-7.15-7.15q1.2-.775 2.588-1.2Q10.475 2 12 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12q0 1.525-.425 2.912-.425 1.388-1.2 2.588Zm-9.775-.9 1.6-1.6-1.4-1.4-.2.2-2.85-2.85-1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialUnpublishedFilled.displayName = 'AmauiIconMaterialUnpublishedFilled';

export default IconMaterialUnpublishedFilled;
