import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuestionMarkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuestionMarkW100Filled'

      short_name='QuestionMark'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.55 15.4q0-1.175.438-2.1.437-.925 1.787-2.1.875-.8 1.313-1.563.437-.762.437-1.712 0-1.425-.987-2.375-.988-.95-2.688-.95-1.3 0-2.1.55T8.425 6.625L7.8 6.3q.675-1.175 1.65-1.788.975-.612 2.4-.612 2.1 0 3.238 1.212 1.137 1.213 1.137 2.813 0 1.05-.462 1.962-.463.913-1.313 1.638-1.425 1.225-1.813 2.037-.387.813-.387 1.838Zm.3 5.3q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialQuestionMarkW100Filled.displayName = 'AmauiIconMaterialQuestionMarkW100Filled';

export default IconMaterialQuestionMarkW100Filled;
