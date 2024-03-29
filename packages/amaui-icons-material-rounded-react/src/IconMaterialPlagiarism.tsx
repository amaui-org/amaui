import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlagiarism = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Plagiarism'

      short_name='Plagiarism'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.45 17q.45 0 .888-.113.437-.112.812-.337l1.75 1.75q.275.275.7.275.425 0 .7-.275.275-.275.275-.7 0-.425-.275-.7l-1.75-1.75q.225-.375.337-.813Q15 13.9 15 13.45 15 12 13.975 11q-1.025-1-2.475-1-1.45 0-2.475 1.025Q8 12.05 8 13.5q0 1.45 1 2.475Q10 17 11.45 17Zm.05-2q-.625 0-1.062-.438Q10 14.125 10 13.5t.438-1.062Q10.875 12 11.5 12t1.062.438Q13 12.875 13 13.5t-.438 1.062Q12.125 15 11.5 15ZM6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V20q0 .825-.587 1.413Q18.825 22 18 22Zm7-14V4H6v16h12V9h-4q-.425 0-.712-.288Q13 8.425 13 8ZM6 4v5-5 16V4Z"/>
    </Icon>
  );
});

IconMaterialPlagiarism.displayName = 'AmauiIconMaterialPlagiarism';

export default IconMaterialPlagiarism;
