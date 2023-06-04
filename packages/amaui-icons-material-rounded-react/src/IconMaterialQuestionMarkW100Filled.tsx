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
      <path d="M11.9 15.4q-.15 0-.237-.113-.088-.112-.088-.237.05-1.05.5-1.9.45-.85 1.7-1.95.875-.8 1.313-1.563.437-.762.437-1.712 0-1.425-.987-2.375-.988-.95-2.688-.95-1.2 0-1.963.462-.762.463-1.287 1.263-.075.125-.225.15-.15.025-.275-.025-.125-.05-.162-.188Q7.9 6.125 7.975 6q.65-1.05 1.587-1.575Q10.5 3.9 11.85 3.9q2.1 0 3.238 1.212 1.137 1.213 1.137 2.813 0 1.05-.462 1.962-.463.913-1.313 1.638-1.275 1.125-1.712 1.887-.438.763-.488 1.638 0 .15-.1.25t-.25.1Zm-.05 5.3q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialQuestionMarkW100Filled.displayName = 'AmauiIconMaterialQuestionMarkW100Filled';

export default IconMaterialQuestionMarkW100Filled;
