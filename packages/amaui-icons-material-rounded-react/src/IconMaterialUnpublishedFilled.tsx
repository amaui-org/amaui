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
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-1.55.425-2.938.425-1.387 1.225-2.587L1.375 4.2q-.3-.3-.3-.713 0-.412.3-.712t.712-.3q.413 0 .713.3l18.4 18.4q.3.3.288.7-.013.4-.313.7-.3.3-.713.3-.412 0-.712-.3l-2.225-2.225q-1.2.8-2.587 1.225Q13.55 22 12 22Zm8.375-4.5-5.325-5.35 1.9-1.9q.275-.275.275-.7 0-.425-.275-.7-.275-.275-.7-.275-.425 0-.7.275l-1.9 1.925-7.15-7.15q1.2-.775 2.588-1.2Q10.475 2 12 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12q0 1.525-.425 2.912-.425 1.388-1.2 2.588ZM12.2 15l-1.4-1.4-.2.2-2.15-2.15q-.275-.275-.7-.275-.425 0-.7.275-.275.275-.275.7 0 .425.275.7L9.9 15.9q.3.3.7.3.4 0 .7-.3Z"/>
    </Icon>
  );
});

IconMaterialUnpublishedFilled.displayName = 'AmauiIconMaterialUnpublishedFilled';

export default IconMaterialUnpublishedFilled;
