import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDisabledVisibleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledVisibleFilled'

      short_name='DisabledVisible'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.25 21.975Q9.3 21.825 7.613 21q-1.688-.825-2.938-2.163-1.25-1.337-1.962-3.099Q2 13.975 2 12q0-2.075.788-3.9.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12v.475q-.425-.275-.987-.537-.563-.263-1.038-.438-.2-3.15-2.487-5.325Q15.2 4 12 4q-1.4 0-2.637.45Q8.125 4.9 7.1 5.7l6.125 6.125q-.475.2-.913.462-.437.263-.862.563L5.7 7.1q-.8 1.025-1.25 2.263Q4 10.6 4 12q0 2.475 1.338 4.438Q6.675 18.4 8.8 19.325q.45.7 1.125 1.425.675.725 1.325 1.225ZM17 20q1.475 0 2.738-.675Q21 18.65 21.75 17.5q-.75-1.15-2.012-1.825Q18.475 15 17 15t-2.738.675Q13 16.35 12.25 17.5q.75 1.15 2.012 1.825Q15.525 20 17 20Zm0 2q-2.4 0-4.287-1.262Q10.825 19.475 10 17.5q.825-1.975 2.713-3.238Q14.6 13 17 13t4.288 1.262Q23.175 15.525 24 17.5q-.825 1.975-2.712 3.238Q19.4 22 17 22Zm0-3q-.625 0-1.062-.438-.438-.437-.438-1.062t.438-1.062Q16.375 16 17 16t1.062.438q.438.437.438 1.062t-.438 1.062Q17.625 19 17 19Z"/>
    </Icon>
  );
});

IconMaterialDisabledVisibleFilled.displayName = 'AmauiIconMaterialDisabledVisibleFilled';

export default IconMaterialDisabledVisibleFilled;
