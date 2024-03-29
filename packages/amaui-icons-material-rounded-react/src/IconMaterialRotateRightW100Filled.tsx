import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRotateRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RotateRightW100Filled'

      short_name='RotateRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.3 12.05q-.125 0-.225-.075t-.125-.2q-.15-.725-.425-1.4-.275-.675-.7-1.3-.075-.1-.075-.212 0-.113.1-.213.125-.125.288-.113.162.013.262.138.45.65.763 1.387.312.738.462 1.588.05.175-.05.288-.1.112-.275.112Zm-6.25 8.225q0-.125.088-.237.087-.113.212-.138.7-.125 1.375-.388.675-.262 1.3-.687.1-.075.213-.075.112 0 .212.1.125.125.112.275-.012.15-.137.25-.65.45-1.4.762-.75.313-1.55.488-.175.05-.3-.05t-.125-.3Zm4.8-2.825q-.075-.075-.087-.2-.013-.125.062-.225.425-.625.7-1.3.275-.675.425-1.4.025-.125.125-.2.1-.075.225-.075.175 0 .275.112.1.113.05.288-.15.8-.45 1.55-.3.75-.775 1.425-.1.125-.262.137-.163.013-.288-.112Zm-7.2 3.175q-2.725-.5-4.512-2.625-1.788-2.125-1.788-4.95 0-3.2 2.25-5.45t5.45-2.25H13l-2-2q-.125-.125-.125-.25T11 2.85q.125-.125.25-.125t.25.125l2.325 2.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25L11.5 8.55q-.125.125-.25.125T11 8.55q-.125-.125-.125-.25T11 8.05l2-2h-.95q-2.925 0-4.962 2.038Q5.05 10.125 5.05 13.05q0 2.525 1.613 4.462 1.612 1.938 4.112 2.438.125.025.2.125.075.1.075.225 0 .175-.112.275-.113.1-.288.05Z"/>
    </Icon>
  );
});

IconMaterialRotateRightW100Filled.displayName = 'AmauiIconMaterialRotateRightW100Filled';

export default IconMaterialRotateRightW100Filled;
