import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/shared/lib/queryKeys";
import { fetchMe } from "../api/sessionApi";
import { getAccessToken } from "../model/sessionStore";

export const useSession = () => {
  return useQuery({
    queryKey: queryKeys.session,
    queryFn: fetchMe,
    enabled: !!getAccessToken(),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
};
