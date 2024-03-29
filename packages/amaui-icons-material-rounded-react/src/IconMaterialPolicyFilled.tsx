import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPolicyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolicyFilled'

      short_name='Policy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14q.825 0 1.413-.588Q14 12.825 14 12t-.587-1.413Q12.825 10 12 10q-.825 0-1.412.587Q10 11.175 10 12q0 .825.588 1.412Q11.175 14 12 14Zm0 7.85q-.275 0-.512-.038-.238-.037-.438-.112-3.1-1.15-5.075-4.1Q4 14.65 4 11.1V6.375q0-.625.363-1.125.362-.5.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725.362.5.362 1.125V11.1q0 1.5-.4 3.025T18.4 17l-2.95-2.95q.275-.475.413-.988Q16 12.55 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 1.65 1.175 2.825Q10.35 16 12 16q.525 0 1.038-.137.512-.138.962-.413l3.225 3.225q-.875 1.05-1.95 1.813-1.075.762-2.325 1.212-.2.075-.438.112-.237.038-.512.038Z"/>
    </Icon>
  );
});

IconMaterialPolicyFilled.displayName = 'AmauiIconMaterialPolicyFilled';

export default IconMaterialPolicyFilled;
