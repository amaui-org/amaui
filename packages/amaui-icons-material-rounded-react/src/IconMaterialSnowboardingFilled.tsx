import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSnowboardingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnowboardingFilled'

      short_name='Snowboarding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 5q.825 0 1.413-.588Q18 3.825 18 3t-.587-1.413Q16.825 1 16 1q-.825 0-1.412.587Q14 2.175 14 3q0 .825.588 1.412Q15.175 5 16 5Zm2.775 17.5q-.225 0-.463-.025-.237-.025-.462-.075L5.225 19.7q-1.1-.225-1.913-.888Q2.5 18.15 2.075 17.2q-.05-.1-.05-.45.075-.3.325-.475t.575-.125q.175.05.3.162.125.113.2.263.3.625.838 1.075.537.45 1.262.6l.475.1L9.5 16l-.8-3.5q-.1-.375-.025-.762.075-.388.275-.738l2.5-4H9.1L7.725 9.2q-.225.35-.625.45-.4.1-.75-.125T5.912 8.9q-.087-.4.113-.75L7.4 5.95q.275-.45.737-.7Q8.6 5 9.1 5h4.6q.675 0 1.088.375.412.375.562.7l.525 1.2Q16.3 8.3 17.15 9q.85.7 1.975.925.375.075.625.35.25.275.25.625 0 .475-.337.775-.338.3-.763.225-1.425-.25-2.562-1.025Q15.2 10.1 14.475 8.95l-1.8 2.875 2.725 2.2q.275.225.475.55.2.325.25.675L17 20.7l1.15.225q.15.05.312.063.163.012.313.012.6 0 1.075-.2t.9-.55q.125-.125.65-.15.325.05.488.325.162.275.112.55-.025.125-.087.225-.063.1-.163.2-.625.55-1.4.825-.775.275-1.575.275ZM14.9 20.25l-.75-4.65-2.85-2.025.325 2.4q.05.425-.125.813-.175.387-.525.637l-2.25 1.5Z"/>
    </Icon>
  );
});

IconMaterialSnowboardingFilled.displayName = 'AmauiIconMaterialSnowboardingFilled';

export default IconMaterialSnowboardingFilled;
