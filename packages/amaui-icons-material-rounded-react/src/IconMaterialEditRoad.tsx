import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditRoad = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditRoad'

      short_name='EditRoad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 13.05V5q0-.425.288-.713Q16.575 4 17 4t.712.287Q18 4.575 18 5v6.05ZM5 20q-.425 0-.713-.288Q4 19.425 4 19V5q0-.425.287-.713Q4.575 4 5 4t.713.287Q6 4.575 6 5v14q0 .425-.287.712Q5.425 20 5 20Zm6-12q-.425 0-.712-.287Q10 7.425 10 7V5q0-.425.288-.713Q10.575 4 11 4t.713.287Q12 4.575 12 5v2q0 .425-.287.713Q11.425 8 11 8Zm0 6q-.425 0-.712-.288Q10 13.425 10 13v-2q0-.425.288-.713Q10.575 10 11 10t.713.287Q12 10.575 12 11v2q0 .425-.287.712Q11.425 14 11 14Zm0 6q-.425 0-.712-.288Q10 19.425 10 19v-2q0-.425.288-.712Q10.575 16 11 16t.713.288Q12 16.575 12 17v2q0 .425-.287.712Q11.425 20 11 20Zm11.125-6 .725-.725q.275-.275.275-.7 0-.425-.275-.7l-.725-.725q-.275-.275-.7-.275-.425 0-.7.275l-.725.725ZM14.5 20q-.2 0-.35-.15-.15-.15-.15-.35v-1.425q0-.05.15-.35l5.15-5.15 2.125 2.125-5.15 5.15q-.05.05-.35.15Z"/>
    </Icon>
  );
});

IconMaterialEditRoad.displayName = 'AmauiIconMaterialEditRoad';

export default IconMaterialEditRoad;
