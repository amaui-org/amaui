import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAcuteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AcuteFilled'

      short_name='Acute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 20q-3.35 0-5.675-2.325Q7 15.35 7 12q0-3.325 2.325-5.663Q11.65 4 15 4q3.325 0 5.663 2.337Q23 8.675 23 12q0 3.35-2.337 5.675Q18.325 20 15 20Zm1-8.4V9q0-.425-.287-.713Q15.425 8 15 8t-.712.287Q14 8.575 14 9v3.025q0 .2.088.387.087.188.212.313L16.575 15q.3.3.713.3.412 0 .712-.3t.3-.713q0-.412-.3-.712ZM3 9q-.425 0-.712-.288Q2 8.425 2 8t.288-.713Q2.575 7 3 7h2q.425 0 .713.287Q6 7.575 6 8t-.287.712Q5.425 9 5 9Zm-1 4q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h3q.425 0 .713.287Q6 11.575 6 12t-.287.712Q5.425 13 5 13Zm1 4q-.425 0-.712-.288Q2 16.425 2 16t.288-.713Q2.575 15 3 15h2q.425 0 .713.287Q6 15.575 6 16t-.287.712Q5.425 17 5 17Z"/>
    </Icon>
  );
});

IconMaterialAcuteFilled.displayName = 'AmauiIconMaterialAcuteFilled';

export default IconMaterialAcuteFilled;
