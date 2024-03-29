import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddHomeWork = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeWork'

      short_name='AddHomeWork'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 17v-5h6v5-5H5v5Zm12-9ZM1 18v-7.975q0-.5.225-.925.225-.425.625-.7l5-3.575Q7.375 4.45 8 4.45q.625 0 1.15.375l5 3.575q.325.225.55.562.225.338.3.713-.575.275-1.075.637-.5.363-.925.813V10L8 6.45 3 10v7h2v-5h6v5h.075q.075.525.225 1.025.15.5.375.975H9v-5H7v5H2q-.425 0-.712-.288Q1 18.425 1 18ZM23 3v8.125q-.425-.45-.925-.813-.5-.362-1.075-.637V3h-9v1.4l-2-1.45q0-.8.588-1.375Q11.175 1 12 1h9q.825 0 1.413.587Q23 2.175 23 3Zm-6 4h2V5h-2Zm1 14q-2.075 0-3.537-1.462Q13 18.075 13 16q0-2.075 1.463-3.538Q15.925 11 18 11t3.538 1.462Q23 13.925 23 16q0 2.075-1.462 3.538Q20.075 21 18 21Zm-.5-4.5v2q0 .2.15.35.15.15.35.15.2 0 .35-.15.15-.15.15-.35v-2h2q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15h-2v-2q0-.2-.15-.35Q18.2 13 18 13q-.2 0-.35.15-.15.15-.15.35v2h-2q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15Z"/>
    </Icon>
  );
});

IconMaterialAddHomeWork.displayName = 'AmauiIconMaterialAddHomeWork';

export default IconMaterialAddHomeWork;
