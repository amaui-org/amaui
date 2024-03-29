import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFoldedHands = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoldedHands'

      short_name='FoldedHands'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-450v90q0 17-11.5 28.5T660-320q-17 0-28.5-11.5T620-360v-69l-45-81q-7 5-11 13t-4 17v229L663-80h-93l-90-148v-252q0-31 15-57t41-43l-56-99q-20-38-17.5-80.5T495-832l38-37q13-13 30-12.5t28 14.5l231 271q8 10 13 21.5t6 24.5l39 470h-80l-39-464-203-238-6 6q-10 10-11.5 23t4.5 25l155 278Zm-440 0 155-278q6-12 4.5-25T408-776l-6-6-203 238-39 464H80l39-470q1-13 6-24.5t13-21.5l231-271q11-14 28.5-14.5T428-869l37 37q30 30 32.5 72.5T480-679l-56 99q26 17 41 43t15 57v252L390-80h-93l103-171v-229q0-9-4-17t-11-13l-45 81v69q0 17-11.5 28.5T300-320q-17 0-28.5-11.5T260-360v-90Z"/>
    </Icon>
  );
});

IconMaterialFoldedHands.displayName = 'AmauiIconMaterialFoldedHands';

export default IconMaterialFoldedHands;
