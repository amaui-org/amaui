import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPolicyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolicyW100'

      short_name='Policy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14q.825 0 1.413-.588Q14 12.825 14 12t-.587-1.413Q12.825 10 12 10q-.825 0-1.412.587Q10 11.175 10 12q0 .825.588 1.412Q11.175 14 12 14Zm0 5.9q1.275-.35 2.387-1.262 1.113-.913 1.863-1.988L13.7 14.1q-.35.3-.787.45-.438.15-.913.15-1.125 0-1.912-.788Q9.3 13.125 9.3 12t.788-1.913Q10.875 9.3 12 9.3t1.913.787q.787.788.787 1.913 0 .425-.138.837-.137.413-.362.763l2.45 2.45q.6-1.1.975-2.313Q18 12.525 18 11.1V6.375L12 4.15 6 6.375V11.1q0 3.025 1.7 5.5t4.3 3.3Zm0 .75q-2.875-.9-4.787-3.55-1.913-2.65-1.913-6V5.9L12 3.4l6.7 2.5v5.2q0 3.35-1.912 6-1.913 2.65-4.788 3.55Zm0-8.625Z"/>
    </Icon>
  );
});

IconMaterialPolicyW100.displayName = 'AmauiIconMaterialPolicyW100';

export default IconMaterialPolicyW100;
